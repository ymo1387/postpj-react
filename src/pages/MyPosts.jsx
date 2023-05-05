import { axiosToken } from "axios-client";
import { useEffect, useState } from "react";

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
			)}
		</>
	);
}
