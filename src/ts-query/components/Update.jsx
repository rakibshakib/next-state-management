import { useUserState } from "../user";

const Update = () => {
  const { data: user, setData, resetData } = useUserState();

  return (
    <div className="py-5 rounded-md px-5 border-white shadow-lg bg-purple-100 text-black">
      <form
        className="flex flex-col gap-2 items-start"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="name">User Name:</label>
        <input
          className="text-black  px-4 py-2 border border-black rounded-md"
          type="text"
          value={user?.name}
          onChange={(e) => setData({ ...user, name: e.target.value })}
        />
        <div className="flex gap-2 items-center">
          <label htmlFor="isActive">Status:</label>
          <input
            type="checkbox"
            name=""
            id=""
            className="px-4 py-2 border border-black w-4 h-4 rounded-lg checked:accent-purple-600"
            checked={user?.isActive}
            onChange={(e) => setData({ ...user, isActive: e.target.checked })}
          />
        </div>
        <button
          className="px-4 py-2 border border-black text-xs rounded-md w-full bg-purple-700 text-white"
          type="button"
          onClick={() => resetData()}
        >
          Reset Data
        </button>
      </form>
    </div>
  );
};

export default Update;
