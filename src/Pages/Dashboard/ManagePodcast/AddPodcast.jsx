import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPodcast = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [podcast, setPodcast] = useState("");

  //   const [createPodcast] = useCreatePodcastMutation();
  //   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await createPodcast({
    //   title,
    //   thumbnail,
    //   shortDescription,
    //   longDescription,
    //   podcast,
    // });
    // navigate("/admin/manage-podcasts");
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Add New Podcast</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold">Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-bold">Thumbnail URL</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-bold">Short Description</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-bold">Long Description</label>
          <textarea
            className="w-full p-2 border rounded"
            value={longDescription}
            onChange={(e) => setLongDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-bold">Podcast URL</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={podcast}
            onChange={(e) => setPodcast(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Podcast
        </button>
      </form>
    </div>
  );
};

export default AddPodcast;
