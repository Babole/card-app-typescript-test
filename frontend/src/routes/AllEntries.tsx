import { useContext } from "react";
import { EntryContext } from "../utilities/globalContext";
import { EntryContextType, Entry } from "../@types/context";
import { useNavigate, Link } from "react-router-dom";

export default function AllEntries() {
  const { entries, deleteEntry } = useContext(EntryContext) as EntryContextType;
  let navigate = useNavigate();
  if (entries.length == 0) {
    return (
      <section>
        <h1 className="text-center font-semibold text-2xl m-5 dark:text-gray-200">
          You don't have any card
        </h1>
        <p className="text-center font-medium text-md dark:text-gray-200">
          Lets{" "}
          <Link
            className="text-blue-400 underline underline-offset-1"
            to="/create"
          >
            Create One
          </Link>
        </p>
      </section>
    );
  }
  return (
    <section className="grid grid-cols-2 md:grid-cols-4">
      {entries.map((entry: Entry, index: number) => {
        return (
          <div
            id={entry.id}
            key={index}
            className="bg-gray-300 shadow-md shadow-gray-500 m-3 p-4 rounded flex flex-col justify-between dark:bg-zinc-800 dark:shadow-zinc-700"
          >
            <h1 className="font-bold text-sm md:text-lg dark:text-white">
              {entry.title}
            </h1>
            <p className="text-center text-lg font-light md:mt-2 md:mb-4 mt-1 mb-3 dark:text-zinc-400 dark:font-normal">
              {entry.description}
            </p>
            <section className="flex items-center justify-between flex-col md:flex-row pt-2 md:pt-0">
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    deleteEntry(entry.id as string);
                  }}
                  className="m-1 md:m-2 p-1 font-semibold rounded-md bg-red-500 hover:bg-red-700"
                >
                  ✖
                </button>
                <button
                  onClick={() => {
                    navigate(`/edit/${entry.id}`, { replace: true });
                  }}
                  className="m-1 md:m-2 p-1 font-semibold rounded-md bg-blue-500 hover:bg-blue-700"
                >
                  🖊
                </button>
              </div>

              <div className="flex flex-col 2xl:flex-row items-center">
                <p className="dark:text-zinc-500">created on:</p>
                <time className="text-right text-sm md:text-lg dark:text-zinc-600 dark:font-medium xl:mx-2">
                  {new Date(entry.created_at.toString()).toLocaleDateString()}
                </time>
                <p className="dark:text-zinc-500">scheduled for:</p>
                <time className="text-right text-sm md:text-lg dark:text-zinc-600 dark:font-medium xl:mx-2">
                  {new Date(
                    entry.scheduled_for.toString()
                  ).toLocaleDateString()}
                </time>
              </div>
            </section>
          </div>
        );
      })}
    </section>
  );
}
