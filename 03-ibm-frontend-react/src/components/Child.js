const Child = (props) => {
    const parentDataInChild = props.parentToChild;
    const childData = 'Monu';

    const sendDataToParent = () => {
        console.log(childData);
        props.childToParent(childData);
    };

    return (
        <div className="container mt-5" style={{ backgroundColor: 'lightpink' }}>
            <h1 className="text-center text-black" style={{ color: 'black' }}>Child component</h1>
            <p style={{ color: 'red' }}>Child data in child component: {childData}</p>
            <p style={{ color: 'red' }}>Parent data in child component: {parentDataInChild}</p>
            <button className="btn btn-success btn-block" style={{ backgroundColor: 'lightgreen' }} onClick={sendDataToParent}>Send Data to Parent</button>
        </div>
    );
};

export default Child;
