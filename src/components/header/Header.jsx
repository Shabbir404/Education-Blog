import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between p-4 m-4 border-b-2 max-w-7xl mx-auto'>

            <h1 className="text-4xl font-semibold">Education Blogs</h1>
            <img src={profile} alt="" />

        </header>
    );
};

export default Header;