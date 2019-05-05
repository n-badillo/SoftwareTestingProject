//all this code pretty much is just for adding/deleting all categories while creating a new project
(function(){
    document.querySelector('#categoryInput').addEventListener('keydown', function(e){
        if(e.keyCode != 13){
            return;
        }

        e.preventDefault()

        var categoryName = this.value
        this.value = ''
        addNewCategory(categoryName)
        updateCategoriesString()
    })

    function addNewCategory(name){
        document.querySelector('#categoriesContainer').insertAdjacentHTML('beforeend', 
         `<li class="category text-white">
            <span onclick="removeCategory(this)" class="name text-white btn" style="background:#C6DDFC; margin:1px;">${name}</span>
            </li>`)
    }
    
})()

function fetchCategoryArray(){
    var categories = []
    
    document.querySelectorAll('.category').forEach(function(e){
        name = e.querySelector('.name').innerHTML
        if(name == '') return

        categories.push(name)
    }) 
    return categories

}

function updateCategoriesString(){
    categories = fetchCategoryArray()
    document.querySelector('input[name="categoriesString"]').value = categories.join(',')

}

function removeCategory(e){
    e.parentElement.remove()
    updateCategoriesString()
}

