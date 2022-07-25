import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import Form from '~/components/Form';
import FormGroup from '~/components/FormGroup';
import Input from '~/components/Input';
import Label from '~/components/Label';
import * as httpRequest from '~/utils/httpRequest';

const LoginWithEmail = () => {
    const { control, handleSubmit } = useForm();

    const handleValid = async (values) => {
        try {
            await httpRequest.post('user/sign-in', values);
            toast.success('Login successfully!');
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message);
        }
    };

    return (
        <Form onSubmit={handleSubmit(handleValid)}>
            <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input
                    control={control}
                    name="email"
                    placeholder="Email address"
                ></Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                    control={control}
                    type="password"
                    name="password"
                    placeholder="Password"
                ></Input>
            </FormGroup>
            <Button className="w-full" large primary>
                Login
            </Button>
        </Form>
    );
};

export default LoginWithEmail;
