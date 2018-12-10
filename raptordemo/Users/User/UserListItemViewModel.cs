using Raptor.Core.BaseTypes;

namespace raptordemo.Users.User
{
    public class UserListItemViewModel
        : RaptorBaseListItemViewModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool Enabled { get; set; }
    }
}