
import '../css/AddingCSS.css';

const styles = {
    internal: {
        color: 'green'
    },
    box: {
        border: '1px solid red',
        padding: '1rem',
        backgroundColor: 'red',
        color: 'white',
        height: '300px',
        width: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const AddingCSS = () => {
  return (
    <>
        <div style={{
            color: 'red',
            fontSize: '1.7rem',
            fontWeight: 700,
            padding: '1rem 0.8rem',
            border: '1px solid red',
            borderRadius: '0.7rem'}}>
            Adding CSS
        </div>

        <div style={styles.internal}>
            Internal CSS
        </div>

        <div className={'flex'}>
            <div style={styles.box}>
                Box Text
            </div>

            <div className={'box bold'}>
                Using Class
            </div>
        </div>
    </>
  )
}

export default AddingCSS;
