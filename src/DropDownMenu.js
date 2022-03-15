function DropDownMenu() {
    //Get Ref for all menu's
    const dropDownMenu = document.querySelectorAll('.DropDownMenu');

    dropDownMenu.forEach((menu) => {
        //Get Ref for all MenuHeaders
        const menuHeaderArray = menu.querySelectorAll('.MenuHeader');
        
        //Get Ref for all MenuItems
        const menuItemsArray = menu.querySelectorAll('.MenuItem');

        //Make each MenuHeader Clickable
        menuHeaderArray.forEach((menuHeader) => {
            menuHeader.addEventListener('click', (e) => {
                console.log('click')   

                //Add/Remove Hidden tag to display or hide menu children             
                menuItemsArray.forEach((item) => {
                    // console.log(item);
                    if (item.classList.contains('hidden')) {
                        item.classList.remove('hidden');                 
                    } else {
                        item.classList.add('hidden');
                    }
                })

                //Add/Remove Outline of menu during open and collapse
                if (menu.classList.contains('addOutline')) {
                    menu.classList.remove('addOutline');
                } else {
                    menu.classList.add('addOutline');
                }
            })
        })
        

    })
};

export {
    DropDownMenu
}