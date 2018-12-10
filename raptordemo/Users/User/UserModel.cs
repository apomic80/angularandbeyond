using System.ComponentModel.DataAnnotations;
using Raptor.Core.BaseTypes;

namespace raptordemo.Users.User
{
    public class UserModel
      : RaptorBaseEntity
    {
        [Required]
        public string FirstName { get; set; }
        
        [Required]
        public string LastName { get; set; }
        public bool Enabled { get; set; }
        public string Note { get; set; }
    }
}