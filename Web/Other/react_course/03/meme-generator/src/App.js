// import { counter } from "@fortawesome/fontawesome-svg-core";
// import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import MemeTextForm from "./components/MemeTextForm";

// export default function App() {
//     return (
//         <div className="meme-generator">
//             <Header />
//             <MemeTextForm />
//         </div>
//     );
// }

export default function App() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(prevCount => prevCount + 1);
    }
    useEffect(() => {
        console.log("Effect function ran!");
    }, []);
    return (
        <>
            <h1>The count is {count}</h1>
            <button onClick={handleClick}>Add</button>
        </>
    );
}

// function greeting(name) {
//     const today = new Date();
//     const timeOfDay = today.getHours() > 3 && today.getHours() < 12 ? "morning" : today.getHours() > 11 && today.getHours() < 17 ? "afternoon" : today.getHours() > 16  && today.getHours() < 20 ? "evening" : "night";
//     console.log(`Good ${timeOfDay}, ${name}`);
// }

// greeting("Piotr");

// function Favorite(props) {
//     return (
//         <h1 onClick={props.handleClick}>{props.isFilled ? "Favorite" : "Not favorite"}</h1>
//     );
// }

// export default function App() {
//     const [contact, setContact] = useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     });
//     function toggleFavorite() {
//         setContact(prevContact => {
//             return {
//                 ...prevContact,
//                 isFavorite: !prevContact.isFavorite
//             };
//         });
//     }
//     return (
//         <main>
//             <article>
//                 <div>
//                     <Favorite isFilled={contact.isFavorite} handleClick={toggleFavorite} />
//                     <h2>{contact.firstName} {contact.lastName}</h2>
//                     <p>{contact.phone}</p>
//                     <p>{contact.email}</p>
//                 </div>
//             </article>
//         </main>
//     );
// }

// export default function App() {
//     function handleClick() {
//         setIsGoingOut(prevIsGoingOut => !prevIsGoingOut);
//     }
//     const [isGoingOut, setIsGoingOut] = useState(true);
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out today?</h1>
//             <div className="state--value" onClick={handleClick}>
//                 <h2>{isGoingOut ? "Yes" : "No"}</h2>
//             </div>
//         </div>
//     );
// }

// function Counter(props) {
//     return (
//         <div>
//             <h1>{props.number}</h1>
//         </div>
//     );
// }

// export default function App() {
//     const [counterValue, setCounterValue] = useState(0);
//     function plusButtonClickHandler() {
//         setCounterValue((prevCounterValue) => prevCounterValue + 1);
//     }
//     function minusButtonClickHandler() {
//         setCounterValue((prevCounterValue) => prevCounterValue - 1);
//     }
//     return (
//         <div className="counter">
//             <button className="counter--minus" onClick={minusButtonClickHandler}>-</button>
//             <Counter number={counterValue} />
//             <button className="counter--plus" onClick={plusButtonClickHandler}>+</button>
//         </div>
//     );
// }

// export default function App() {
//     function handleClick() {
//         console.log("I have been clicked");
//     }
//     function handleHover() {
//         console.log("He has been hovered over");
//     }
//     return (
//         <div className="container">
//             <img
//                 src="https://picsum.photos/640/360"
//                 alt="Things"
//                 onMouseOver={handleHover}
//             />
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// }

// export default function App() {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         emailAddress: "",
//         userComments: "",
//         isFriendly: true,
//         employmentStatus: "",
//         favColor: ""
//     });
//     function handleChange(event) {
//         const {name, value, type, checked} = event.target;
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [name]: type === "checkbox" ? checked : value
//             }
//         });
//     }
//     function handleSubmit(event) {
//         event.preventDefault();
//         // sumbitToApi(formData);
//         console.log(formData);
//     }
//     console.log(formData);
//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}
//             />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 name="lastName"
//                 value={formData.lastName}
//             />
//             <input
//                 type="email"
//                 placeholder="Email Address"
//                 onChange={handleChange}
//                 name="emailAddress"
//                 value={formData.emailAddress}
//             />
//             <textarea
//                 placeholder="Your Comments"
//                 onChange={handleChange}
//                 name="userComments"
//                 value={formData.userComments}
//             />
//             <input
//                 type="checkbox"
//                 id="isFriendly"
//                 name="isFriendly"
//                 checked={formData.isFriendly}
//                 onChange={handleChange}
//             />
//             <label htmlFor="isFriendly">Are you friendly?</label>
//             <fieldset>
//                 <legend>Current employment status</legend>
//                 <input
//                     type="radio"
//                     name="employmentStatus"
//                     value="unemployed"
//                     id="unemployed"
//                     onChange={handleChange}
//                     checked={formData.employmentStatus === "unemployed"}
//                 />
//                 <label htmlFor="unemployed">Unemployed</label>
//                 <input
//                     type="radio"
//                     name="employmentStatus"
//                     value="part-time"
//                     id="part-time"
//                     onChange={handleChange}
//                     checked={formData.employmentStatus === "part-time"}
//                 />
//                 <label htmlFor="part-time">Part-time</label>
//                 <input
//                     type="radio"
//                     name="employmentStatus"
//                     value="full-time"
//                     id="full-time"
//                     onChange={handleChange}
//                     checked={formData.employmentStatus === "full-time"}
//                 />
//                 <label htmlFor="full-time">Full-time</label>
//             </fieldset>
//             <select
//                 id="favColor"
//                 name="favColor"
//                 onChange={handleChange}
//                 value={formData.favColor}
//             >
//                 <option value="">-- Choose --</option>
//                 <option value="red">Red</option>
//                 <option value="orange">Orange</option>
//                 <option value="yellow">Yellow</option>
//                 <option value="green">Green</option>
//                 <option value="blue">Blue</option>
//                 <option value="indigo">Indigo</option>
//                 <option value="violet">Violet</option>
//             </select>
//             <button onClick={handleSubmit}>Submit</button>
//         </form>
//     );
// }

// export default function App() {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//         confirmedPassword: "",
//         wantsNewsletter: false
//     });
//     function handleChange(event) {
//         const {name, value, type, checked} = event.target;
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [name]: type === "checkbox" ? checked : value
//             };
//         })
//     }
//     function handleSubmit(event) {
//         event.preventDefault();
//         if (formData.password === formData.confirmedPassword) {
//             console.log("Successfully signed up");
//             if (formData.wantsNewsletter) {
//                 console.log("Thanks for signing up for our newsletter!");
//             }
//         }
//         else {
//             console.log("Passwords do not match");
//         }
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="email"
//                 name="email"
//                 placeholder="Email address"
//                 onChange={handleChange}
//                 required={true}
//                 value={formData.email}
//             />
//             <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 onChange={handleChange}
//                 required={true}
//                 value={formData.password}
//             />
//             <input
//                 type="password"
//                 name="confirmedPassword"
//                 placeholder="Confirm password"
//                 onChange={handleChange}
//                 required={true}
//                 value={formData.confirmedPassword}
//             />
//             <input
//                 type="checkbox"
//                 id="wantsNewsletter"
//                 name="wantsNewsletter"
//                 onChange={handleChange}
//                 checked={formData.wantsNewsletter}
//             />
//             <label htmlFor="wantsNewsletter">I want to join the newsletter</label>
//             <button>Sign up</button>
//         </form>
//     );
// }