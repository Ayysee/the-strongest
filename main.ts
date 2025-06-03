player.onArrowShot(function () {
    blocks.fill(
    TNT,
    pos(100, 70, 3),
    pos(8, 70, -3),
    FillOperation.Replace
    )
    blocks.fill(
    REDSTONE_BLOCK,
    pos(100, 71, 3),
    pos(8, 71, -3),
    FillOperation.Replace
    )
    agent.teleport(pos(2, 0, 0), WEST)
    loops.pause(2900)
    mobs.spawnParticle(EXPLOSION_HUGE, pos(6, 1, 0))
    mobs.spawnParticle(EXPLOSION_HUGE, pos(14, 1, 0))
    mobs.spawnParticle(EXPLOSION_HUGE, pos(22, 1, 0))
    mobs.spawnParticle(EXPLOSION_HUGE, pos(30, 1, 0))
    mobs.spawnParticle(EXPLOSION_HUGE, pos(38, 1, 0))
    mobs.spawnParticle(EXPLOSION_HUGE, pos(46, 1, 0))
    mobs.spawnParticle(EXPLOSION_HUGE, pos(54, 1, 0))
    blocks.fill(
    AIR,
    pos(100, 20, 5),
    pos(2, -1, -5),
    FillOperation.Replace
    )
    blocks.fill(
    COBBLESTONE,
    pos(100, 2, 8),
    pos(2, 0, 6),
    FillOperation.Replace
    )
    blocks.fill(
    COBBLESTONE,
    pos(100, 2, -8),
    pos(2, 0, -6),
    FillOperation.Replace
    )
})
player.onChat("run", function () {
	
})
