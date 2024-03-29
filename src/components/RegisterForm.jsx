const API = "https://stingray-app-axdpn.ondigitalocean.app/api/auth/signup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
const RegisterForm = () => {
    const title = "Register";
    const description = "Please Register";

    const formSchema = yup.object({
        username: yup.string().required("Username is required"),
        email: yup.string().required("Email is required"),
        password: yup.string().required("Password is required"),
    });
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const submitData = async (data) => {
        console.log(data)
        const { username, email, password } = data
        try {
            await axios.post(API, {
                username,
                email,
                password
            })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })

        }
        catch (e) {
            console.log(e)
        }


    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{description}</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(submitData)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                placeholder="username"
                                className="input input-bordered"
                                {...register('username')}
                            />
                            <p className="text-red-400">
                                {errors.username?.message}
                            </p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                {...register('email')}
                            />
                            <p className="text-red-400">
                                {errors.email?.message}
                            </p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                {...register('password')}
                            />
                            <p className="text-red-400">
                                {errors.password?.message}
                            </p>
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;