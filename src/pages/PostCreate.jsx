import { axiosToken } from "axios-client";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function PostCreate() {
	const navigate = useNavigate();
	const [disable, setDisable] = useState(false);
	// textarea grow
	const handleTextareaChange = (e) => {
		const textarea = e.target;
		textarea.style.height = "auto";
		textarea.style.height = textarea.scrollHeight + "px";
	};

	const createPost = (e) => {
		setDisable(true);
		e.preventDefault();
		const data = {
			type: 1,
			title: e.target.title.value,
			body: e.target.body.value,
		};
		axiosToken
			.post("/v1/posts", data)
			.then((res) => {
				console.log(res);
				navigate("/myposts");
			})
			.catch((err) => {
				console.log(err);
				setDisable(false);
			});
	};

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-3xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Create new post
						</h1>
						<form
							className="space-y-4 md:space-y-6"
							onSubmit={createPost}
						>
							<div>
								<label
									htmlFor="title"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Title
								</label>
								<input
									type="text"
									name="title"
									id="title"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
									maxlength="255"
								/>
							</div>
							<div>
								<label
									htmlFor="body"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Body
								</label>
								<textarea
									name="body"
									rows={1}
									className={
										"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									}
									style={{
										overflow: "hidden",
										resize: "none",
									}}
									required
									onChange={handleTextareaChange}
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-gray-400 disabled:text-slate-700 disabled:cursor-no-drop"
								disabled={disable}
							>
								Create
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
