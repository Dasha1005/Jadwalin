const tabsBtn = document.querySelectorAll(".pricing__tabs-btn");
const tabsItem = document.querySelectorAll(".pricing__tabs-item");

tabsBtn.forEach(onTabsClick);
function onTabsClick(item){
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active')){
            tabsBtn.forEach(function(item){
                item.classList.remove('active');
            });

            tabsItem.forEach(function(item){
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.pricing__tabs-btn').click();