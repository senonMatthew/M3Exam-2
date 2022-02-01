
const LocalStorage = (() => {
  const checkStorage = () => {
    let storageItem;

    if (localStorage.length === 0) {

      storageItem = [];
    } else {

      storageItem = JSON.parse(localStorage.getItem("calItem"));
    }

    return storageItem;
  };

  return {

    sendToStorage: (item) => {
      const storageItem = checkStorage(); 
      storageItem.push(item); 
      localStorage.setItem("calItem", JSON.stringify(storageItem)); 
    },

    fetchFromStorage: () => checkStorage(),

    getStorageData: () => checkStorage(),

    updateStorage: (newItems) => {
      localStorage.setItem("calItem", JSON.stringify(newItems));
    },

    clearItems: () => {
      localStorage.clear();
    },
  };
})();


const ItemCtrl = (() => {

  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

 
  const itemData = {
    items: [],
    currentItem: null,
    totalCalories: 0,
  };


  return {

    logData: () => itemData,

    setItemData: (items) => {
      itemData.items = items; 
    },

    getItemData: () => itemData.items,

    createItem: (item) => {
      const { name, calories } = item; 
      const items = ItemCtrl.getItemData();
      let id;

      if (items.length > 0) {
        id = items[items.length - 1].id + 1;
      } else {
        id = 1;
      }
      const newItem = new Item(id, name, parseInt(calories)); 
      LocalStorage.sendToStorage(newItem); 
      return newItem; 
    },

    getTotalCal: () => {
      let totalCal = 0; 
      const items = ItemCtrl.getItemData(); 


      items.forEach((item) => {
        totalCal += item.calories;
      });

      itemData.totalCalories = totalCal; 
      return itemData.totalCalories; 
    },

    setCurrentItem: (item) => {
      itemData.currentItem = item; 
      return itemData.currentItem; 
    },
  
    getCurrentItem: () => {
      return itemData.currentItem;
    },

    updateItemList: (id, newName, newCalorie) => {
      let updatedItem = "";
   
      itemData.items.forEach((item) => {
        if (item.id === id) {

          item.name = newName;
          item.calories = newCalorie;
          updatedItem = item;
        }
      });
      return updatedItem; 
    },
    
    removeItem: (id) => {
      
      const newItems = itemData.items.filter((item) => item.id !== id);
      itemData.items = newItems;
      return itemData.items;
    },
    
    clearItemData: () => {
      itemData.items.splice(0, itemData.items.length);
    },
  };
})();


const UICtrl = (() => {
  
  const selectors = {
    itemField: "#item-field",
    caloriesField: "#calories-field",
    itemLists: "#item-lists",
    itemList: ".item",
    addBtn: ".add-btn",
    updateBtn: ".update-btn",
    backBtn: ".back-btn",
    delBtn: ".delete-btn",
    resetBtn: ".reset-btn",
    totalCal: "#total-cal",
    btnDefaultState: ".btn-default-state",
    btnEditState: ".btn-edit-state",
  };

  
  return {
    
    getSelectors: () => selectors,
    
    renderItems: (items) => {
      
      items.forEach((item) => {
        UICtrl.setItem(item);
      });
    },
    
    setItem: (item) => {
      const { id, name, calories } = item;
      const itemList = document.createElement("li");
      itemList.id = `item-${id}`;
      itemList.className = "item bg-secondary";
      itemList.innerHTML = `<p class="lead-2 primary">
                                <span class="item-name">${name}</span> consists of
                                <span class="item-cal">${calories}</span> calories
                            </p>
                            <div class="edit-btn" title="Edit Item">
                                <i class="fa fa-edit primary"></i>
                            </div>`;
      document.querySelector(selectors.itemLists).appendChild(itemList);
    },
    
    getInputValue: () => {
      
      return {
        name: document.querySelector(selectors.itemField).value,
        calories: document.querySelector(selectors.caloriesField).value,
      };
    },
    
    validateInput: () => {
      const addItemBtn = document.querySelector(selectors.addBtn);
      return {
        enableBtn: () => {
          addItemBtn.disabled = false;
          addItemBtn.classList.replace("btn-deactive", "btn-primary");
        },
        disableBtn: () => {
          addItemBtn.disabled = true;
          addItemBtn.classList.replace("btn-primary", "btn-deactive");
        },
        noNegativeCal: () => {
          const calorie = document.querySelector(selectors.caloriesField);
          if (calorie.value === 0 || calorie.value < 0) {
            
            calorie.value = 1;
          }
        },
      };
    },
    
    vanishItems: () => {
      document
        .querySelectorAll(selectors.itemList)
        .forEach((item) => item.remove());
    },
    
    clearInput: () => {
      document.querySelector(selectors.itemField).value = "";
      document.querySelector(selectors.caloriesField).value = "";
      UICtrl.validateInput().disableBtn(); 
    },
    
    showTotalCal: (totalCal) => {
      document.querySelector(selectors.totalCal).textContent = totalCal;
    },
    
    showEditState: (item) => {
      
      const { name, calories } = item;
      document.querySelector(selectors.itemField).value = name;
      document.querySelector(selectors.caloriesField).value = calories;

      
      document.querySelector(selectors.btnDefaultState).style.display = "none"; 
      document.querySelector(selectors.btnEditState).style.display = "flex"; 
    },
    
    showDefaultState: () => {
      UICtrl.clearInput(); 
      
      document.querySelector(selectors.btnEditState).style.display = "none";
      document.querySelector(selectors.btnDefaultState).style.display = "flex";
    },
    
    showUpdatedItem: (item) => {
      const { id, name, calories } = item;
      
      document.querySelectorAll(selectors.itemList).forEach((item) => {
        if (item.id === `item-${id}`) {
          
          item.firstElementChild.firstElementChild.textContent = name; 
          item.firstElementChild.lastElementChild.textContent = calories; 
        }
      });
    },
    
    checkItemUI: () => {
      
      const itemCount = document.querySelectorAll(selectors.itemList).length;
      if (itemCount === 0) {
        
        UICtrl.showDefaultState();
      }
    },
  };
})();


const App = ((ItemCtrl, UICtrl) => {
  
  const selectors = UICtrl.getSelectors();

  
  const loadEventListeners = function () {
    
    document.querySelector(selectors.addBtn).addEventListener("click", addItem);
    
    document.querySelectorAll("input").forEach((inputField) => {
      inputField.addEventListener("keyup", validateFields);
    });
    
    document
      .querySelector(selectors.itemLists)
      .addEventListener("click", editItem);
    
    document
      .querySelector(selectors.updateBtn)
      .addEventListener("click", updateItem);
    
    document
      .querySelector(selectors.backBtn)
      .addEventListener("click", backToDefaultState);
    
    document
      .querySelector(selectors.delBtn)
      .addEventListener("click", deleteItem);
    
    document
      .querySelector(selectors.resetBtn)
      .addEventListener("click", resetItem);
  };

  
  function addItem(e) {
    const inputItems = UICtrl.getInputValue(); 
    const newItem = ItemCtrl.createItem(inputItems); 
    ItemCtrl.setItemData(LocalStorage.fetchFromStorage()); 
    UICtrl.setItem(newItem); 
    UICtrl.clearInput(); 

    
    const totalCal = ItemCtrl.getTotalCal();
    UICtrl.showTotalCal(totalCal);

    console.log(ItemCtrl.getItemData());
  }

  function validateFields(e) {
    const { name, calories } = UICtrl.getInputValue();
    
    if (name !== "" && calories !== "") {
      
      UICtrl.validateInput().enableBtn();
    } else {
      
      UICtrl.validateInput().disableBtn();
    }
  }

  function editItem(e) {
    
    if (e.target.classList.contains("edit-btn")) {
      
      const id = parseInt(e.target.parentElement.id.split("-")[1]);
      const currentItem = {
        id,
        name: e.target.previousElementSibling.firstElementChild.textContent,
        calories: parseInt(
          e.target.previousElementSibling.lastElementChild.textContent
        ),
      };
      const item = ItemCtrl.setCurrentItem(currentItem); 
      UICtrl.showEditState(item);
    }
  }

  function updateItem(e) {
    
    const name = document.querySelector(selectors.itemField).value;
    const calories = parseInt(
      document.querySelector(selectors.caloriesField).value
    );

    const curItem = ItemCtrl.getCurrentItem(); 
    const updatedItem = ItemCtrl.updateItemList(curItem.id, name, calories); 
    LocalStorage.updateStorage(ItemCtrl.getItemData()); 
    UICtrl.showUpdatedItem(updatedItem); 
    
    UICtrl.showTotalCal(ItemCtrl.getTotalCal());
  }

  function backToDefaultState(e) {
    UICtrl.showDefaultState(); 
  }

  function deleteItem(e) {
    
    const id = ItemCtrl.getCurrentItem().id;
    const item = ItemCtrl.removeItem(id);
    LocalStorage.updateStorage(item);
    UICtrl.vanishItems();
    UICtrl.renderItems(item);
    UICtrl.clearInput();
    UICtrl.showTotalCal(ItemCtrl.getTotalCal());
    UICtrl.checkItemUI();
    console.log(item);
  }

  function resetItem(e) {
    
    LocalStorage.clearItems();
    ItemCtrl.clearItemData();
    UICtrl.vanishItems();
    UICtrl.showTotalCal(ItemCtrl.getTotalCal());
  }

  
  return {
    init: function () {
      UICtrl.showDefaultState(); 
      UICtrl.validateInput().disableBtn(); 
      loadEventListeners(); 
      ItemCtrl.setItemData(LocalStorage.fetchFromStorage()); 
      const items = ItemCtrl.getItemData(); 
      UICtrl.renderItems(items); 

      
      const totalCal = ItemCtrl.getTotalCal();
      UICtrl.showTotalCal(totalCal);
    },
  };
})(ItemCtrl, UICtrl);


App.init();
