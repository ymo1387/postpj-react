import { axiosToken } from "axios-client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyPosts() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axiosToken
			.get("/v1/posts")
			.then((res) => {
				console.log(res);
				setPosts(res.data.data);
				setLoading(false);
			})
			.catch((err) => console.log(err));
		return () => {};
	}, []);

	return (
		<>
			{loading ? (
				<>loading...</>
			) : (
				<>
					<div className="p-3">
						<Link to="/post/create">
							<button className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">
								Create Post
							</button>
						</Link>
					</div>
					<hr className="pt-3" />
					<>
						{posts.length > 0 ? (
							<div>
								{posts.map((post) => (
									<div
										key={post.id}
										className="shadow-md p-3 m-3"
									>
										<h2>{post.title}</h2>
										<small className="opacity-50">
											{post.created_at}
										</small>
										<p>{post.body}</p>
									</div>
								))}
							</div>
						) : (
							<div>no data</div>
						)}
					</>
				</>
			)}
		</>
	);
}
