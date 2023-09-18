function projectCard({title, description}){
    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-md">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
            <p className="text-white">{description}</p>
          </div>
        </div>
      );
}
export default projectCard;