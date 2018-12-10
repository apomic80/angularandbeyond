using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Raptor.Core.BaseTypes;
using Raptor.Core.DataAnnotations.Form;

namespace raptordemo.Users.User
{
    public class UserViewModel
        : RaptorBaseViewModel
    {
        [Required]
        [TextBox(ColLg=6)]
        public string FirstName { get; set; }
        
        [Required]
        [TextBox(ColLg=6)]
        public string LastName { get; set; }

        [CheckBox]
        public bool Enabled { get; set; }

        [LocalizedTextArea]
        public ICollection<RaptorLocalizedText> Note { get; set; }
    }
}