

type CategoryProp = {
    text: string;
    type: boolean;
}

function Category({ text, type}: CategoryProp) {
    if (type === true) {
       return( <button className="h-8 rounded-[20px] py-1 px-7  mr-[10px] mb-[10px] bg-accent text-white">
            {text}
        </button>)
        
    }
    return (
    <button className="h-8 rounded-[20px] py-1 px-7 border-[1px] border-stone07 mr-[10px] mb-[10px] bg-white">
        {text}
    </button>
  );
}

export default Category;
