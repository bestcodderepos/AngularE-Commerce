using API.Core.DbModels.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class UserManagerExtensions
    {
        public static async Task<AppUser> FindByUserByClaimsPrincipleWithAddressAsync(this UserManager<AppUser> input, ClaimsPrincipal user)
        {
            var email = user?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email).Value;
            var userr = await input.Users.SingleOrDefaultAsync(x => x.Email == email);

            userr.Address = new Address
            {
                AppUserId = "f5d41300-5f37-4b04-97ed-1a4f8730d783",
                City = "Ankara",
                FirstName ="Ertuğrul",
                LastName="Yılmaz",
                Street="Test Caddesi",
                ZipCode ="06006"
            };
            return await input.Users.Include(x => x.Address).SingleOrDefaultAsync(x => x.Email == email);
        }

        public static async Task<AppUser> FindByEmailFromClaimsPrinciple(this UserManager<AppUser> input,ClaimsPrincipal user)
        {
            var email = user?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email).Value;
            return await input.Users.SingleOrDefaultAsync(x => x.Email == email);
        }
    }
}
