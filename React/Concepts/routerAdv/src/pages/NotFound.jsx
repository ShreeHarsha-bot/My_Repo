const NotFound = () => {
  return (
    <section className="flex justify-center bg-white font-serif px-4 py-10">
      <div className="text-center max-w-md">
        {/* Smaller GIF */}
        <div
          className="h-48 bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage:
              "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
          }}
        >
        </div>
      

        {/* Content */}
        <div className="-mt-6">
          <h3 className="text-xl font-semibold mb-1">
            Looks like you're lost
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            The page you are looking for is not available.
          </p>

          <a
            href="/"
            className="inline-block bg-green-600 text-white px-4 py-1.5 rounded text-sm hover:bg-green-700 transition"
          >
            Go to Home
          </a>
        </div>

      </div>
    </section>
  );
};

export default NotFound;
