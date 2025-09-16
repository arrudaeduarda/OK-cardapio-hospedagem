import { ArrowUpRight } from "lucide-react";
import "./Btn.css"
export default function Btn(props: { name: string }) {
    return (
        <button>
            <span className="adventure-button">{props.name}</span>
            <div className="icon-circle">

                <ArrowUpRight color="white" strokeWidth={2.5} size={24} />
            </div>
        </button>
    );
}