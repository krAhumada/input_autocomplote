let list_autocomplete = ['kenny ahumada', "rick", "ahumada", "alvarado"];


function input_autocomplete(json_data){

    const {selectoInput, list_autocomplete, selector_listItems, contanier_inputs} = json_data;

    input =  document.querySelector(selectoInput);

    let sorted_list_autocomplete = list_autocomplete.sort();

    const listItems = document.querySelector(`${contanier_inputs} ${selector_listItems}`)

    removeElements(contanier_inputs);

    for(let list_items of sorted_list_autocomplete){

        if (list_items.toLowerCase().indexOf(input.value.toLowerCase()) > -1 && input.value !== '') {
        // if(list_items.toLowerCase().startsWith(input.value.toLowerCase()) && input.value !== ''){

            let li_item = document.createElement("li");

            li_item.classList.add("list-items");

            li_item.style.cursor = "pointer";

            li_item.setAttribute("onclick", `displayListItems('${list_items}', '${contanier_inputs} ${selectoInput}', '${contanier_inputs}')`);

            let words_item = `<b>${list_items.substr(0, input.value.length)}</b>`;

            words_item += list_items.substr(input.value.length);

            li_item.innerHTML = words_item;

            listItems.appendChild(li_item);

        }

    }

}

function displayListItems(value, input, contanier_inputs){

    document.querySelector(input).value = value;

    removeElements(contanier_inputs)

}

function removeElements(contanier_inputs){

    let items = document.querySelectorAll(`${contanier_inputs} .list-items`);

    items.forEach(item => {

        item.remove();

    });
}


document.addEventListener('DOMContentLoaded', e => {

    // const myInput = document.querySelector(`.input-autocomplete`)

    // myInput.addEventListener('blur', e => {

    //     removeElements(`.form-autocomplete`)
    // })

})