export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const active =
    (tabs || []).find(t => t.id === activeTabId) || (tabs && tabs[0]) || null;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === (active && active.id) ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  if (tab.id !== active.id) {
                    onTabSelected?.(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {active && active.content}
      </div>
    </div>
  );
};
