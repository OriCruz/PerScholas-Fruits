// const React = require("react");
// const DefaultLayout = require('./Default');

// class Index extends React.Component {
//   render() {
//     const {fruits}=this.props;
//     return (
//       <DefaultLayout title={"Fruits Index Page"}>
//       <nav>
//       <a href="/fruits/new">Create a New Fruit</a>
//       </nav>
//       <ul>
//       {fruits.map((fruit)=>{
//           return (
//             <li key={fruit._id}>
//               The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a>
//               {' '}is {fruit.color} <br/>
//               {
//                 fruit.readyToEat?
//                 '  It is ready to eat':
//                 '  It is NASTY!!!!!!'
//               } <br />
//               <a href={`/fruits/${fruit._id}/edit`}>Edit</a>
//                 <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
//                 <input type="submit" value="Delete" />
//               </form>
//             </li>
//           )
//         })
//       }
//     </ul>
//       </DefaultLayout>
//     );
//   }
// }

// module.exports = Index;

const React = require('react')
const DefaultLayout = require('./Default')
// import '../Index.css';

class Index extends React.Component {
    render() {
        const { fruits } = this.props
        return (
            <DefaultLayout title={"Fruits Index Page"}>
                <nav>
                    <a href="/fruits/new">Create a New Fruit</a>
                </nav>
                <ul>
                    {fruits.map((fruit, i) => {
                        return (
                            <li>
                                The{' '}
                                <a href={`/fruits/${fruit.id}`}>
                                    {fruit.name}
                                </a>{' '}
                                is {fruit.color} <br></br>
                                {fruit.readyToEat
                                    ? `It is ready to eat`
                                    : `It is not ready to eat`}
                                <br />
                                <form style={{backgroundColor:'red'}} action={`/fruits/${fruit._id}?_method=DELETE`} method="POST" >
                                    <input type="submit" value="DELETE" />
                                </form>
                                <button className='fancyButton'>
                                    <a href={`/fruits/${fruit._id}/Edit`}>Edit</a>
                                </button>
                                {/* <button onclick="window.location.href='{`localhost:3000/fruits/${fruit._id}/Edit`}';">
                                         Edit
                                </button> */}
                                
                            </li>
                        )
                    })}
                </ul>
            </DefaultLayout>
        );
    }
}

module.exports = Index;