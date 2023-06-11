import React from 'react'
import Swal from 'sweetalert2'

const AddProduct = (props) => {
    const { setItems } = props

    async function clickHandler() {
        // alert('click')
        // const title = prompt("Enter Item Title")
        // const desc = prompt("Enter Item Description")
        // const weight = Number(prompt("Enter Item Initial Weight"))

        // const item = { title, desc, weight }
        // const temp = [...items, item]
        // setItems(temp)
        // alert("Item added Successfully")

        const { value: formValues } = await Swal.fire({
            title: 'Add Item',
            showCancelButton: true,
            confirmButtonText: "Save",
            html:
                'Title : <input id="title" class="swal2-input">' +
                '<br/>' +
                'Details : <input id="desc" class="swal2-input">' +
                '<br/>' +
                'Weight : <input id="weight" class="swal2-input">',

            focusConfirm: false,
            preConfirm: () => {
                return ({
                    title: document.getElementById('title').value,
                    desc: document.getElementById('desc').value,
                    weight: document.getElementById('weight').value,
                    id: new Date().getTime()
                })
            }
        })

        if (formValues) {
            setItems((prev) => [...prev, formValues])
            Swal.fire({
                icon: 'success',
                title: 'Item has been saved',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }

    return (
        <div>
            <button onClick={clickHandler}> Add New Item</button>
        </div>
    )
}

export default AddProduct
