// CODE-ADD,DECREASE,OOD,EVEN NUMBER DAN CARA GUNAKAN FONT-AWESOME-REACT
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementbyAmount,
  incrementAsync,
  incrementifOdd,
  selectCount,
} from '../../redux/reducers/counterSlice';
import styles from './style.module.css';

const Product = () => {

  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = React.useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <h1>Product</h1>

      <div>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <span className={styles.value}>{count}</span>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={() => dispatch(incrementbyAmount(incrementValue))}
          >
            Add Amount
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            Add Async
          </button>
          <button
            className={styles.button}
            onClick={() => dispatch(incrementifOdd(incrementValue))}
          >
            Add If Odd
          </button>
        </div>
      </div>

      <i class="bi-alarm"></i>

      <FontAwesomeIcon icon={faHome} style={{ fontSize: 90 }} />
    </>

  )
}

export default Product



// CODE-MENAMPILKAN DATA DARI API "JSONPLACEHOLDER"
// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchUsers, getUserError, getUsersStatus, selectAllUsers } from '../../redux/reducers/datauserReducer';

// const Product = () => {
//   const dispatch = useDispatch();

//   const userStatus = useSelector(getUsersStatus);
//   const AllUsers = useSelector(selectAllUsers);
//   console.log(AllUsers);
//   const error = useSelector(getUserError);

//   React.useEffect(() => {
//     if (userStatus === 'idle') {
//       dispatch(fetchUsers());
//     }
//   }, [userStatus, dispatch]);

//   let contentToDisplay = '';
//   if (userStatus === 'loading') {
//     contentToDisplay = <h2>Loading</h2>;
//   } else if (userStatus === 'success') {
//     contentToDisplay = AllUsers.map((data) => (
//       <div key={data.id}>
//         <h2>{data.name}</h2>
//         <p>{data.username}</p>
//         <hr />
//       </div>
//     ))
//   } else if (userStatus === 'failed') {
//     contentToDisplay = <p>{error}</p>;
//   }

//   return (
//     <React.Fragment>
//       <div>
//         <h1>User Page</h1>
//         {contentToDisplay}
//       </div>
//     </React.Fragment>
//   )
// }

// export default Product


// CODE-BACA DAN KIRIM GAMBAR, KIRIM DATA PAKAI FORM
// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom'
// import { addUsersAction } from '../../redux/reducers/postUserReducer';

// const Product = () => {
//   const navigate = useNavigate();

//   const dispatch = useDispatch();

//   const [data, setData] = React.useState({
//     id: 26,
//     username: "",
//     password: "",
//     level: ""
//   });
//   const [showImg, setshowImg] = React.useState("");
//   const [saveImg, setImg] = React.useState("");


//   const handleChange = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleChangeImage = (e) => {
//     const file = e.target.files[0];
//     // Untuk membaca file
//     const reader = new FileReader();
//     reader.onload = () => {
//       setshowImg(reader.result);
//     };
//     reader.readAsDataURL(file);

//     setImg(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     dispatch(addUsersAction({ data, saveImg }));
//     return navigate('/login')
//     // setTimeout(() => {
//     //   navigate("/login/:id");
//     // }, 2000)
//   };

//   return (
//     <React.Fragment>
//       <form
//         onSubmit={handleSubmit}
//         className="d-grid gap-4"
//         style={{ marginTop: "8dvw" }}>

//         <input
//           onChange={handleChangeImage}
//           type="file"
//         />
//         {
//           showImg ? (
//             <div>
//               <img
//                 src={showImg}
//                 alt="gambar product"
//                 value={data.image}
//               />
//             </div>
//           ) : null
//         }
//         <input
//           name="username"
//           value={data.username}
//           onChange={handleChange}
//           id="Username"
//           type="text"
//           className="form-control ps-sm-4 rounded-3"
//           placeholder="Username"
//         />
//         <textarea
//           name="password"
//           value={data.password}
//           onChange={handleChange}
//           id="Password"
//           className="form-control ps-sm-4 pt-sm-3 rounded-3"
//           placeholder="Password"
//         />
//         <input
//           name="level"
//           value={data.level}
//           onChange={handleChange}
//           id="Level"
//           type="number"
//           className="form-control ps-sm-4 rounded-3"
//           placeholder="Level"
//         />
//         <button
//           id="btn-post"
//           type="submit"
//           className="btn btn-warning text-light fw-semibold mx-auto"
//           style={{ width: "21dvw", marginTop: "5dvw" }}>
//           Post
//         </button>
//       </form>
//     </React.Fragment>
//   )
// }

// export default Product