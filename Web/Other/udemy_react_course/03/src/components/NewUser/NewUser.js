import Card from "../UI/Card";
import NewUserForm from "./NewUserForm";

const NewUser = (props) => {
    return (
        <Card>
            <NewUserForm onSubmit={props.onFormSubmit} />
        </Card>
    );
};

export default NewUser;
