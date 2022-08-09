import './Hint.css'

const Hint = props => {
    return (
        <div className='hint' style={{width: props.w, height: props.h}}>
            <p>
                {props.text}
            </p>
        </div>
    );
};

export default Hint;