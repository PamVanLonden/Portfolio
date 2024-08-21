import { AiFillHome } from "react-icons/ai";
function HomePage(){
    return (
        <>
            <h2><i><AiFillHome /></i>Home</h2>
            <p>Did these changes deploy?</p>
            <article>
                <h3>Career Goals</h3>
                <p>My career goals are to...</p>
            </article>
            <article>
                <h3>Technologies used in this site</h3>
                <p>The technologies used in this site include the following:</p>
                <dl>
                    <dt>Term</dt>
                    <dd>Description</dd>
                    <dt>Term</dt>
                    <dd>Description</dd>
                    <dt>Term</dt>
                    <dd>Description</dd>
                </dl>
            </article>
        </>
    )
}
    
export default HomePage;