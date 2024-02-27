import { Spinner } from "flowbite-react";

export default function LoadingComponent(){
    return (
<div className="h-full w-full flex items-center justify-center">
<Spinner aria-label="Extra large spinner example" size="lg" />
</div>
        );
}