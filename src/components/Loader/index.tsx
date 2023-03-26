import loader from '../../assets/loader.svg'
import { LoaderContainer } from "./style";

export function Loader() {
    return (
        <LoaderContainer>
            <img src={loader} width={200} alt="" />
        </LoaderContainer>
    )
}
