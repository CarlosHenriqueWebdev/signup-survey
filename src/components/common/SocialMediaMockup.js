import { useState } from "react";

export default function SocialMediaMockup({
	userStatus,
	handleCompleteProfile,
}) {
	const [liked, setLiked] = useState(false);
	const [commented, setCommented] = useState(false);
	const [comment, setComment] = useState("");

	return (
		<div>
			<div>
				<h5 className="text-md font-medium text-gray-800">
					{userStatus === "limited"
						? "Limited Access: Complete Your Profile to Unlock Full Features"
						: "Welcome to Full Access!"}
				</h5>

				{/* Post Content */}
				<div className="mt-4 bg-gray-100 p-4 rounded">
					<p className="text-gray-700">
						<strong>John Doe</strong> posted:
					</p>
					<p className="mt-2 text-gray-800">
						Excited to be here! Loving the community so far. Looking forward to
						connecting with everyone.
					</p>
				</div>

				{/* Interactive Elements with Limitations */}
				<div className="mt-4 flex justify-between">
					<button
						onClick={() => setLiked(true)}
						className={`rounded-lg px-4 py-2 w-full mr-2 ${
							userStatus === "limited" || liked
								? "bg-gray-300 text-gray-500 cursor-not-allowed"
								: "bg-blue-500 text-white"
						}`}
						disabled={userStatus === "limited" || liked}
					>
						{liked ? "Liked" : "Like"}
					</button>
					<button
						onClick={() => setCommented(true)}
						className={`rounded-lg px-4 py-2 w-full ${
							userStatus === "limited" || commented
								? "bg-gray-300 text-gray-500 cursor-not-allowed"
								: "bg-blue-500 text-white"
						}`}
						disabled={userStatus === "limited" || commented}
					>
						Comment
					</button>
				</div>

				{/* Comment Input */}
				{commented && (
					<div className="mt-4">
						<input
							type="text"
							value={comment}
							onChange={(e) => setComment(e.target.value)}
							placeholder="Write a comment..."
							className="w-full p-2 border rounded"
						/>
						<button
							onClick={() => alert(`Comment submitted: ${comment}`)}
							className="mt-2 bg-blue-500 text-white rounded-lg px-4 py-2 w-full"
						>
							Submit Comment
						</button>
					</div>
				)}

				{userStatus === "limited" && (
					<p className="text-red-500 text-sm mt-2">
						Interaction disabled. Complete your profile to like, comment, and
						connect with others.
					</p>
				)}

				{/* Profile Completion Prompt */}
				{userStatus === "limited" && (
					<div className="mt-6">
						<button
							onClick={handleCompleteProfile}
							className="bg-green-500 text-white rounded-lg px-4 py-2 w-full"
						>
							Complete Profile to Unlock Full Access
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
