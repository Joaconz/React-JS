import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { GrClose } from "react-icons/gr";
import swal from 'sweetalert';


export default function FormToBuy() {
  const cartContext = useContext(CartContext);
  const { cart, clearCart, totalPrice, form, setForm } = cartContext;
  const [orderId, setOrderId] = useState(0);
  
  const [buyer, setBuyer] = useState({
    email: "",
    name: "",
    lastName: "",
    phone: "",
    adress: "",
  });

  function handleInputChange(e) {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  }

  function generateOrder(e) {
    e.preventDefault()
    let order = {};

    order.buyer = buyer;
    order.date = new Date();
    order.items = cart.map((item) => {
      const id = item.id;
      const name = item.tittle;
      const price = item.price * item.cant;
      const quantity = item.cant;

      return { id, name, price, quantity };
    });    
    order.total = totalPrice();


    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then((resp) => {
        console.log(resp);
        console.log(resp.id)
        setOrderId(resp.id);
        swal({
        title: "Thank you "+buyer.name +"!",
        text: "Your order number is: "+ resp.id,
        icon: "success",
      });
      })
      .catch((err) => console.log(err))
      .finally(()=>clearCart()) 

  }

  return (
    <>
      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
      >
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-700 d">
                Finish your purchase!
              </h3>
              <button
                className="text-gray-700 bg-transparent hover:bg-gray-500 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600"
                data-modal-toggle="defaultModal"
                onClick={() => setForm(false)}
              >
                <GrClose />
              </button>
            </div>
            <div class="p-6 space-y-6">
              <form onSubmit={(e) => generateOrder(e)}>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="email"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={handleInputChange}
                  />
                  <label
                    for="email"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Email address
                  </label>
                </div>
                <div class="grid xl:grid-cols-2 xl:gap-6">
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleInputChange}
                    />
                    <label
                      for="name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                      First name
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleInputChange}
                    />
                    <label
                      for="lastName"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                      Last name
                    </label>
                  </div>
                </div>
                <div class="grid xl:grid-cols-2 xl:gap-6">
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="phone"
                      id="phone"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleInputChange}
                    />
                    <label
                      for="phone"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                      Phone number (123-456-7890)
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="zip"
                      id="grid-zip"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleInputChange}
                    />
                    <label
                      for="grid-zip"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                      Zip
                    </label>
                  </div>
                

                </div>
              </form>
            </div>
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button type="submit" className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ml-1"
              onClick={generateOrder}>
                Finish
              </button>
              <button
                className="flex text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded ml-7"
                onClick={() => setForm(!form)}
              >
                Go back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
