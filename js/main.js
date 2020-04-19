const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


selectItem = function(e) {
    removeBorder();
    removeShow();

    this.classList.add('tab-border');

    const tabContentItem = document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show');

}

removeBorder = function() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

removeShow = function() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

tabItems.forEach(item => item.addEventListener('click', selectItem));