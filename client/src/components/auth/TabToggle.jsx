export default function TabToggle({ tabs, activeKey, onChange }) {
  return (
    <div className="flex h-[2.125rem] w-full rounded-control bg-surface-tab p-[3px]" role="tablist">
      {tabs.map((tab) => {
        const active = tab.key === activeKey;
        return (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.key)}
            className={`flex-1 rounded-[3px] font-lato text-[0.6875rem] font-bold ${
              active ? 'bg-brand text-white' : 'bg-transparent text-ink'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
