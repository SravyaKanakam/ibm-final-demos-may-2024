import { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const parentData = 'Sonu';
    const [childDataInParent, setChildDataInParent] = useState('');

    const receiveDataFromChild = (data) => {
        console.log(data);
        setChildDataInParent(data);
    };

    return (
        <div className="container py-4 bg-info rounded-lg shadow-lg">
            <h1 className="text-center text-warning">Parent component</h1>
            <p className="text-success">Parent data in parent component: {parentData}</p>
            <p className="text-primary">Child data in parent component: {childDataInParent}</p>
            <Child childToParent={receiveDataFromChild} parentToChild={parentData} />
        </div>
    );
};

export default Parent;
