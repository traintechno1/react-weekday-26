import Paragraph from "./Paragraph";

function First() {
    return(
        // As React Component can return only one JSX from a function and if we want to have 
        // multiple tags in that component without any parent element(container), because it is just an extra 
        // tag in a dom, which does not have any significant use we can avoid that with React Fragment,
        // To Create react fragment we have two options <React.Fragment> all the other tags </React.Fragment>
        // Or <> all the other tags </>
        <>
            <h2>First React Component</h2>
            <Paragraph/>
            <hr />
        </>
    )
}

export default First;