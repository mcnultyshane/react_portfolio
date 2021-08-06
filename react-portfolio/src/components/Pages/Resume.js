import React from 'react';
// class Downloadlink extends React.Component {
//     render() {
//         return(
//         <a href="" class="link"></a>
//         )
//     }
// }

function Resume() {
    return (
        <section className="container">
            <h2 className="top-title">Resume</h2>
            <hr></hr>

            <div>
                <div class ="mt-5">
                    <h2 className="top-title">Shane McNulty</h2>
                    <a href="/images/SJM-Resume-junior_dev7.25.21 (1).pdf" src="" download>Click Here to download</a>
                    <hr></hr>
                    <h4 className="skills">Proficiencies:</h4>
                    <p>React | MongoDB | MySQL | Express | Sequelize | Javascript | CSS</p>
                    <p>Manager of large teams | Excellent Communicator | Highly Effective is Fast-Paced Environments</p>

                </div>
            </div>


        </section>
    )

}

export default Resume;

