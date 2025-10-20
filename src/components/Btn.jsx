const button = ({ text }) => {
    return (
        <div className="py-2 px-6 bg-(--two) text-(--light) hover:bg-(--one) 
        rounded-full inline-block my-3 transition-all duration-300 cursor-pointer ">
            {text}
        </div>
    )
}
export default button