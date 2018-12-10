using Raptor.Core.Infrastructure;

namespace raptordemo.Users
{
    public class UsersPlugin
        : IRaptorPlugin
    {
        public string Name => "Users";

        public string Version => "1.0.0";
        public void OnLoad()
        {
            
        }
    }
}