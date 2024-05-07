const Page404 = (props) => {
    return (
        <div className="container-fluid bg-dark-peach text-center py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1 className="text-danger">Page Not Found</h1>
                        <p className="text-muted">The page you are looking for does not exist.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page404;
