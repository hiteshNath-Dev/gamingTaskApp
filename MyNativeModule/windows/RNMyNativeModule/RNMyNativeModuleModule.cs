using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace My.Native.Module.RNMyNativeModule
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNMyNativeModuleModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNMyNativeModuleModule"/>.
        /// </summary>
        internal RNMyNativeModuleModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNMyNativeModule";
            }
        }
    }
}
