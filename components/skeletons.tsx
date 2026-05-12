export function AboutSkeleton() {
  return (
    <div className="animate-pulse flex flex-col gap-4">
      <div className="h-4 w-3/4 bg-gray-200 rounded" />
      <div className="h-4 w-full bg-gray-200 rounded" />
      <div className="h-4 w-5/6 bg-gray-200 rounded" />
    </div>
  );
}

export function ExperienceSkeleton() {
  return (
    <div className="flex flex-col divide-y divide-gray-100">
      {[1, 2, 3].map((i) => (
        <div key={i} className="py-10 flex flex-col gap-4 animate-pulse">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <div className="flex flex-col gap-2">
              <div className="h-4 w-52 bg-gray-200 rounded" />
              <div className="h-3 w-32 bg-gray-100 rounded" />
            </div>
            <div className="h-3 w-28 bg-gray-100 rounded" />
          </div>
          {/* Description lines */}
          <div className="flex flex-col gap-2">
            <div className="h-3 w-full bg-gray-100 rounded" />
            <div className="h-3 w-5/6 bg-gray-100 rounded" />
            <div className="h-3 w-4/6 bg-gray-100 rounded" />
          </div>
          {/* Tech stack pills */}
          <div className="flex gap-2">
            {[60, 80, 50, 70].map((w) => (
              <div
                key={w}
                className="h-5 rounded-full bg-gray-100"
                style={{ width: w }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
