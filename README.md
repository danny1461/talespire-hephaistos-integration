# Hephaistos Integration

This mod takes advantage of [TaleSpire Symbiote's v0.1](https://symbiote-docs.talespire.com/api_doc_v0_1.md.html) and [Hephaistos v82 Dice Roller](https://hephaistos.online/docs/guides/integration/dice-rolls). Once loaded, clicking anywhere that would have fired a dice roll[^1] within Hephaistos site instead pulls the roll into TaleSpire's dice tray for the user to roll instead. Additionally, all rolls are named based on what is in Hephaistos.

You're encouraged to use github for bug reports and, if possible, make pull requests with fixes.

**Note**: TaleSpire currently does not support multipliers. Therefore any roll that takes advantage of multipliers cannot be rolled inside TaleSpire and will instead roll, like normal, in Hephaistos and the result will be (admittedly, awkwardly due to how TaleSpire works) sent to TaleSpire.

### Todo
- [x] Integrate dice rolls
- [ ] Implement options to allow users to allow throwing of dice in TaleSpire or default to sending the rolls instead

[^1]: This mod uses trademarks and/or copyrights owned by Paizo Inc., which are used under Paizo's Community Use Policy. We are expressly prohibited from charging you to use or access this content. This mod is not published, endorsed, or specifically approved by Paizo Inc. For more information about Paizo's Community Use Policy, please visit paizo.com/communityuse. For more information about Paizo Inc. and Paizo products, please visit paizo.com. Furthermore, this mod is not published, endorsed, or specifically approved by Hephaistos.