import { Spinner } from "flowbite-react";

const Loading = ()=>{
    return (
        <div className="w-screen flex items-center justify-center h-screen bg-slate-700">
            <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
    );
}

export default Loading;