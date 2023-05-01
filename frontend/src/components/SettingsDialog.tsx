type SettingsDialogProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggleOverlay: () => void;
};

export default function SettingsDialog({
  darkMode,
  setDarkMode,
  handleToggleOverlay,
}: SettingsDialogProps) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-200 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-medium">Settings</p>

          <button
            className="bg-gray-200 hover:bg-gray-300 text-white font-medium p-2 rounded-full"
            onClick={handleToggleOverlay}
          >
            ✖
          </button>
        </div>

        <button
          className="bg-blue-400 hover:bg-blue-500 rounded-md font-medium text-white py-2 px-4"
          onClick={() => {
            setDarkMode((prev) => !prev);
          }}
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}
