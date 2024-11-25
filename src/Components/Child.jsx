function Child(props) {
        
    const price = (props.count * 3.99).toFixed(2)
    return <div>This is the child. Price: {price} $</div>
};

export default Child;