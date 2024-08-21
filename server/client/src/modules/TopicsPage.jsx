import { IoDocumentSharp } from "react-icons/io5";

function TopicsPage(){
    return (
        <>
            <h2><i><IoDocumentSharp /></i>Web Development Topics</h2>
            <nav class="local">
                <a href="#servers">Web Servers</a>
                <a href="#frontend">Frontend Design</a>
                <a href="#images">Optimized Images</a>
                <a href="#css">Stylesheets</a>
                <a href="#forms">Form Usability</a>
                <a href="#nodeExpress">Node and Express</a>
                <a href="#js">JavaScript</a>
                <a href="#dom">DOM</a>
            </nav>
            <article id="servers">
                <h3>About Web Servers</h3>

                <p>Explain how you created the index page and explain what its name means, as it relates to websites and servers.</p> 

                <p>Explain what you see in the browser's Web Dev/Inspector tools...which page names have which status? </p>

                <p>Explain what you see in the browser's Web Dev/Inspector tools. What is different about the file's details on the web server versus the local computer?</p>

                <p>Explain why the favicon.ico file has a status 200, but the main.css and main.js files do not. </p>

                <p>Explain the parts of the URL to your web file. What are the schema, subdomain, host domain, and resources?</p>
            </article> 

            <article id="frontend">
                <h3>Frontend Design</h3>
                <p>Explain the concept of frontend design.</p>

                <p>Explain the five "E"s of usability.</p>
                    <dl>
                        <dt>E...</dt>
                        <dd>description</dd>
                        <dt>E...</dt>
                        <dd>description</dd>
                        <dt>E...</dt>
                        <dd>description</dd>
                        <dt>E...</dt>
                        <dd>description</dd>
                        <dt>E...</dt>
                        <dd>description</dd>
                    </dl>

                <p>Explain the purpose of page layout tags.</p>

                <p>Explain how anchors link to content and from page to page.</p>
            </article>

            <article id="images">
                <h3>Optimizing Images</h3>
                <p>What are the 6 major specifications of images for the web?</p>
                <p>Which file formats are most appropriate for photos and for line art?</p>
            </article>

            <article id="css">
                <h3>Cascading Stylesheets</h3>
                <p>What are the main reasons to incorporate stylesheets in websites and apps?</p>
                <p>What are the 5 ways to incorporate styles?</p>
                <p>What is the purpose of using page layout blocks?</p>
            </article>

            <article id="forms">
                <h3>Form usability, elements and attributes, best practices, and accessibility</h3>
                <p>What are the 6 major goals of accessible forms?</p>
                <p>What are the major tags, their attributes, and their purposes?</p>
                <p>What are the major form style recommendations to improve usability?</p>
            </article>

            <article id="nodeExpress">
                <h3>Node, npm, and Express:</h3>
                <p>What are these three technologies, 
                    and how can we use them to improve the web development experience?</p>
            </article>
            <article id="js">
                <h3>JavaScript</h3>
                <p>What are the main data types?</p>
                <p>How are objects, arrays, and JSON used?</p>
                <p>How are conditionals and loops used?</p>
                <p>What is object-oriented programming?</p>
                <p>What is functional programming?</p>
            </article>
            <article id="dom">
                <h3>DOM Manipulation</h3>
                <p>Why do developers update the DOM of a page using JavaScript and Express?</p>
            </article>
        </>
    )
}
    
export default TopicsPage;